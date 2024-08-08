import { type SchemaTypeDefinition } from 'sanity'

import {projects} from './schemaTypes/projectSchema'
import {forms} from './schemaTypes/form'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, forms],
}
