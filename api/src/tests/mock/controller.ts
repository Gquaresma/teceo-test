import Controller from '../../controllers/Controller';

class SutController extends Controller {}

export const mockService = {
	findAll: jest.fn().mockReturnValue([{ operation: 'findMany' }]),
	findUnique: jest.fn().mockReturnValue({ operation: 'findOne' }),
	create: jest.fn().mockReturnValue({ operation: 'save' }),
};

export const makeSutController = (service: any) => new SutController(service);
