export default function MainPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className="bg-green-400 p-4">Main Page Layout</div>
        {children}
      </div>
    )
  }