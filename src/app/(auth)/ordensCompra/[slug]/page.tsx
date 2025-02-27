export default function InfoOrdemCompra({ params }: { params: { slug: number }} ) {
   return (
      <div>Ordem de compra número: {params.slug}</div>
   )
}