type Route = { to: string; name: string }

type Status = 'PENDING' | 'REJECTED' | 'DONE' | 'NONE'

type DataSourceItem<T> = T & { image?: { url: string } }

export type { DataSourceItem, Route, Status }
