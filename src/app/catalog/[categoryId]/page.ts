import { redirect, RedirectType } from 'next/navigation';

type Props = { params: { categoryId: string; page: string } };

export default function Page({ params }: Props) {
  const { categoryId } = params;
  redirect(`${categoryId}/1`, RedirectType.replace);
}
