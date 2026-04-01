'use server'

import { revalidatePath } from "next/cache"

export async function revalidateExampleAction(formData: FormData) {
  revalidatePath(`posts`)
}