
import { Loader2 } from 'lucide-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center text-center p-8 rounded-lg bg-card shadow-2xl">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg font-medium text-foreground">Cargando...</p>
        <p className="text-sm text-muted-foreground">Por favor, espera un momento.</p>
      </div>
    </div>
  );
}
