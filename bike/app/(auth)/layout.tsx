export default function MainAuthPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className="bg-purple-400 p-4">{children}</div>
        {children}
      </div>
    )
  }