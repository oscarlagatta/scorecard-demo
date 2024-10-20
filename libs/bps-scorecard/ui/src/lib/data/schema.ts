import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const metricSchema = z.object({
  id: z.number().optional(),
  name: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  timeStamp: z.date().optional(),
  metricTypeId: z.number().optional(),
  runFrequencyId: z.number().optional(),
  runDay: z.string().nullable().optional(),
  serviceAlignmentId: z.number().optional(),
  dataGranularityId: z.number().optional(),
  consequenceEligible: z.boolean().optional(),
  metricCalculation: z.string().nullable().optional(),
  valueType: z.string().nullable().optional(),
  additionalInformation: z.string().nullable().optional(),
  status: z.string().nullable().optional(),
  createdUserId: z.number().optional(),
  createdDateTime: z.date().optional(),
  updatedUserId: z.number().optional(),
  updatedDateTime: z.date().optional(),
});

export type MetricDto = z.infer<typeof metricSchema>;
