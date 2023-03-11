// Bringing TailwindCSS
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PrimaryLayout>{children}</PrimaryLayout>
    </html>
  );
}
