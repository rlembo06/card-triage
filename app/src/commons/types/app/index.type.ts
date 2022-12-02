type Route = { to: string; name: string }

type Status = 'PENDING' | 'REJECTED' | 'DONE' | 'NONE'

type DataSourceItem<T> = T & { image?: { url: string } }

type StatusState = { status: Status; error: string | null }

export type { DataSourceItem, Route, Status, StatusState }
