import { Header } from '@/features/mega-menu-header/header';

export default function MegaMenuHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
