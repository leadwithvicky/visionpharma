import exp from 'constants';
import { get } from 'http';
import { Schema, Types as MongooseTypes } from 'mongoose';

export interface ProgramEnrollment_I {
  programId: MongooseTypes.ObjectId;
  userId: MongooseTypes.ObjectId;
  userEmail?: string;
  type: 'ULP' | 'ILP';
  status?: 0 | 1 | 2;
  batchMonth?: string;
  batchYear?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateEnrollment_I {
  userId?: Schema.Types.ObjectId | string;
  programId?: Schema.Types.ObjectId | string;
  type?: 'ULP' | 'ILP';
  status?: 0 | 1 | 2;
  batchMonth?: string;
  batchYear?: number;
}

export interface getAllEnrollmentsQuery_I {
  page?: number;
  limit?: number;
  nameOrEmailSearch?: string;
  programSearch?: string;
  type?: 'ULP' | 'ILP';
  batchMonth?: string;
  batchYear?: number;
  status?: number;
}
