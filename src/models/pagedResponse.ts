export class pagedResponse
{
  pageNumber: number
  pageSize: number
  data: any | any[]
  message: string
  totalPages: number
  succeeded: boolean
  errors: string[]
}
