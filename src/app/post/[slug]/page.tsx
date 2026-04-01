import SinglePost from "@/components/SinglePost";
import SpinLoader from "@/components/SpinLoader";
import { findPostBySlugCached } from "@/lib/post/queries"
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>,
}

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await findPostBySlugCached(slug)

  return {
    title: post?.title,
    description: post?.excerpt
  }
}

// 1. O Cache fica isolado (não mexe com requisições dinâmicas)
async function CachedContent({slug}: {slug: string}) {
  'use cache'

  cacheLife('max')

  return <SinglePost slug={slug}/>
}

// 2. Criamos um "Resolvedor" que desempacota a Promise.
// Ele ficará DENTRO do Suspense, então o await dele não quebra o build!
async function PostResolver({ paramsPromise }: { paramsPromise: Promise<{slug: string}> }) {
  const { slug } = await paramsPromise; // Agora o await está seguro

  return <CachedContent slug={slug} />
}

// 3. A Página perde o 'async'. Ela apenas repassa a Promise do 'params' para frente.
export default function PostSlugPage({ params }: PostSlugPageProps) {
  return (
    <Suspense fallback={<SpinLoader/>}>
      {/* Passamos a Promise inteira sem fazer o await nela */}
      <PostResolver paramsPromise={params} />
    </Suspense>
  )
}