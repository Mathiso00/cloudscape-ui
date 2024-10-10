export interface KoopsBreadcrumbProps {
  items: KoopsBreadcrumbItem[]
  skip?: [number, number]
}

export interface KoopsBreadcrumbItem {
  text: string
  to?: string
}
