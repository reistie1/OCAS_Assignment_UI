export class requestParameters
{
  pageSize: number
  pageNumber: number

  constructor(pageNumber: number, pageSize: number)
  {
    this.pageNumber = pageNumber;
    this.pageSize = pageSize;
  }
}
