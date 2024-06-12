import { Footer } from '@/features/normal-header/footer';
import { Header } from '@/features/normal-header/header/page';

export default function NormalHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
