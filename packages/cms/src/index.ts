import { z } from "zod";

export const fieldTypes = {
  text: z.string(),
  number: z.number(),
  boolean: z.boolean(),
  date: z.string(),
  richText: z.string(),
  image: z.string().url(),
  reference: z.string(),
  array: z.array(z.unknown()),
  object: z.record(z.unknown()),
} as const;

export type FieldType = keyof typeof fieldTypes;

export interface CollectionFieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  defaultValue?: unknown;
  options?: Record<string, unknown>;
}

export function buildCollectionSchema(fields: CollectionFieldDef[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const field of fields) {
    let fieldSchema = fieldTypes[field.type] as z.ZodTypeAny;
    if (field.required) {
      shape[field.name] = fieldSchema;
    } else {
      shape[field.name] = fieldSchema.optional();
    }
  }
  return z.object(shape);
}

export function validateItemData(
  fields: CollectionFieldDef[],
  data: Record<string, unknown>
): { success: boolean; data?: Record<string, unknown>; errors?: z.ZodError } {
  const schema = buildCollectionSchema(fields);
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data as Record<string, unknown> };
  }
  return { success: false, errors: result.error };
}
