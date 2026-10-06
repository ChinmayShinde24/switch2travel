import Container from "@/components/ui/Container";
import Skeleton from "@/components/ui/Skeleton";

export default function DestinationsLoading() {
  return (
    <Container className="py-16 md:py-24">
      <Skeleton className="mb-4 h-3 w-28" />
      <Skeleton variant="title" className="mb-4" />
      <Skeleton className="mb-12 max-w-xl" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} variant="card" className="min-h-72" />
        ))}
      </div>
    </Container>
  );
}
