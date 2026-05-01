import { ManagePostForm } from "@/components/Admin/ManagePostForm";
import SpinLoader from "@/components/SpinLoader";
import { Metadata } from "next";
import { Suspense } from "react";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Criar post',
  }
}

export default async function AdmPost() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <h1 className="text-xl font-extrabold self-center">CRIAR POST</h1>
        <Suspense fallback={<SpinLoader/>}>
          <ManagePostForm mode='create' />
        </Suspense>
      </div>
    </>
  )
}
