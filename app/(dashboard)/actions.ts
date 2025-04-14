'use server';

import { deleteProductById, db, products } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get('id'));
  await deleteProductById(id);
  revalidatePath('/');
}

export async function addProduct(formData: FormData) {
  'use server';
  
  try {
    const imageUrl = formData.get('image_url') as string;
    const name = formData.get('name') as string;
    const status = formData.get('status') as 'active' | 'inactive' | 'archived';
    const price = Number(formData.get('price'));
    const stock = Number(formData.get('stock'));
    const availableAt = new Date(formData.get('available_at') as string);

    await db.insert(products).values({
      imageUrl,
      name,
      status,
      price,
      stock,
      availableAt
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error adding product:', error);
    return { success: false, error };
  }
}
