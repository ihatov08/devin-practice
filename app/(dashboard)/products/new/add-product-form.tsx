'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

type AddProductFormProps = {
  action: (formData: FormData) => Promise<void>;
};

export function AddProductForm({ action }: AddProductFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      
      const randomId = Math.floor(Math.random() * 1000000);
      formData.append('random_id', randomId.toString());
      
      const result = await action(formData);
      
      if (result?.success) {
        window.location.href = '/';
      } else {
        console.error('Form submission failed:', result?.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          商品名
        </label>
        <Input
          id="name"
          name="name"
          placeholder="商品名を入力"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="image_url" className="text-sm font-medium">
          画像URL
        </label>
        <Input
          id="image_url"
          name="image_url"
          type="url"
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="status" className="text-sm font-medium">
          ステータス
        </label>
        <select
          id="status"
          name="status"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          required
        >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
          <option value="archived">archived</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="price" className="text-sm font-medium">
          価格
        </label>
        <Input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="stock" className="text-sm font-medium">
          在庫数
        </label>
        <Input
          id="stock"
          name="stock"
          type="number"
          min="0"
          placeholder="0"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="available_at" className="text-sm font-medium">
          販売開始日
        </label>
        <Input
          id="available_at"
          name="available_at"
          type="datetime-local"
          defaultValue={new Date().toISOString().slice(0, 16)}
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '登録中...' : '商品を登録'}
      </Button>
    </form>
  );
}
