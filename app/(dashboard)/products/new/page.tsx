import { AddProductForm } from './add-product-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { redirect } from 'next/navigation';
import { addProduct } from '../../actions';

export default function AddProductPage() {
  async function handleAddProduct(formData: FormData) {
    'use server';
    
    try {
      const result = await addProduct(formData);
      
      if (result.success) {
        redirect('/');
      }
      
      return result;
    } catch (error) {
      console.error('Error in handleAddProduct:', error);
      return { success: false, error };
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>新規商品登録</CardTitle>
        <CardDescription>
          新しい商品を登録するためのフォームです。すべての項目を入力してください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AddProductForm action={handleAddProduct} />
      </CardContent>
    </Card>
  );
}
