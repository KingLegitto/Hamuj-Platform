import { type SchemaTypeDefinition } from 'sanity'

import {projects} from './schemaTypes/projectSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects],
}
