import {
  getMessage,
  getMessageFromException,
  getMessageFromHttpResponse,
  getMessagesFromException,
} from '../src/getMessagesFromExceptions';

describe('getMessagesFromExceptions test', () => {
  test('invalid error object', () => {
    const errors = getMessagesFromException({ test: 'hi' });

    expect(errors.length).toEqual(1);
  });
  test('is axios error getMessageFromException', () => {
    const errors = getMessageFromException({ isAxiosError: true });

    expect(errors.length).toEqual(0);
  })

  describe('getMessageFromHttpResponse', () => {
    test('is not axios error', () => {
      const errors = getMessageFromHttpResponse({});

      expect(errors.length).toEqual(0);
    })
    test('is axios error with no config', () => {
      const code = 'test'
      const address = '127.0.0.1'

      const errors = getMessageFromHttpResponse({
        isAxiosError: true,
        config: null,
        code,
        address
      });

      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual(expect.objectContaining({
        text: `Request failed with code - ${code} to address - ${address}`
      }));
    })
    test('is axios error with no response', () => {
      const code = 'test'
      const url = 'http://localhost'
      const method = 'GET';

      const errors = getMessageFromHttpResponse({
        isAxiosError: true,
        config: {
          url,
          method
        },
        code,
        response: null
      });

      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual(expect.objectContaining({
        text: `Request ${method} ${url} failed with code - ${code} and body [No response was received]`
      }));
    })
    test('is axios error with response', () => {
      const url = 'http://localhost'
      const method = 'GET';
      const status = 'GOOD'
      const data = { test: 'hi' }

      const errors = getMessageFromHttpResponse({
        isAxiosError: true,
        config: {
          url,
          method
        },
        response: {
          status,
          data
        }
      });

      expect(errors.length).toEqual(1);
      expect(errors[0]).toEqual(expect.objectContaining({
        text: `Request ${method} ${url} failed with code ${status} and body [${JSON.stringify(data)}]`
      }));
    })
    test('is axios error with with messages', () => {
      const messages = [getMessage('test')];
      const code = 'test'
      const address = '127.0.0.1'
      const [
        noConfig,
        dataMessage,
        dataMessages,
            ] = getMessageFromHttpResponse({
        isAxiosError: true,
        code, address,
        config: null,
        response: {
          data: {
            messages,
            message: 'hi'
          }
        }
      });

      expect(noConfig).toBeDefined()
      expect(dataMessage).toBeDefined()
      expect(dataMessages).toBeDefined()

      expect(noConfig.text).toEqual(`Request failed with code - ${code} to address - ${address}`);
      expect(dataMessage.text).toEqual(`hi`);
      expect(dataMessages.text).toEqual(`test`);
    })
  })
});
