import Service from '../../services/Service';

class SutService extends Service {}

export const mockRepo = {
	findMany: jest.fn().mockReturnValue([{ operation: 'findMany' }]),
	findUnique: jest.fn().mockReturnValue({ operation: 'findUnique' }),
	create: jest.fn().mockReturnValue({ operation: 'create' }),
	update: jest.fn().mockReturnValue({ operation: 'update' }),
	delete: jest.fn().mockReturnValue({ operation: 'delete' }),
};

export const makeSutService = (repo: any) => new SutService(repo);
