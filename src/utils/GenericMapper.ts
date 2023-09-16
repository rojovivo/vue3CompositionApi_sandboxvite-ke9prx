import { IMapper } from './IMapper';

export class GenericMapper<TSource, TDestination>
  implements IMapper<TSource, TDestination>
{
  constructor(
    private readonly transformation: (source: TSource) => TDestination
  ) {}

  map(source: TSource): TDestination {
    return this.transformation(source);
  }
}
