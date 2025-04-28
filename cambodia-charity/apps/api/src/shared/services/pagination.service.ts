import { Injectable } from '@nestjs/common';

@Injectable()
export class PaginationService {
  paginate(items: any[], page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = items.slice(startIndex, endIndex);
    return {
      totalItems: items.length,
      totalPages: Math.ceil(items.length / limit),
      currentPage: page,
      items: paginatedItems,
    };
  }
}
