import { type SchemaTypeDefinition } from 'sanity'

import {projects} from './schemaTypes/projectSchema'
import { productListing } from './schemaTypes/productListingSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, productListing],
}
