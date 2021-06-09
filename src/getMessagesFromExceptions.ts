export enum MessageType {
	AlreadyExists = 'ALREADY_EXIST',
	Undefined = 'UNDEFINED',
	LoggerMessage = 'LOGGER_MESSAGE',
	ItemsNotAvailable = 'ITEMS_NOT_AVAILABLE',
	OrderCreationIsPending = 'ORDER_CREATION_IS_PENDING',
	OrderNotFound = 'ORDER_NOT_FOUND',
	UnknownShippingMethod = 'UNKNOWN_SHIPPING_METHOD',
	UnavailableShippingMethod = 'UNAVAILABLE_SHIPPING_METHOD',
}

export enum MessageLevel {
	info = 'info',
	warning = 'warning',
	error = 'error',
}

export interface Message {
	level: MessageLevel;
	type: MessageType;
	text: string;
}

export function getMessage(
	text: string,
	type: MessageType = MessageType.Undefined,
	level: MessageLevel = MessageLevel.error,
) {
	return {
		text,
		level,
		type,
	};
}

export function getMessageFromHttpResponse(e?: any): Array<Message> {
	if (!e.isAxiosError) {
		return [];
	}
	let errors: Message[] = [];
	if (!e.config) {
		errors = [...errors,
			getMessage(
				`Request failed with code - ${e.code} to address - ${e.address}`,
			),
		];
	}

	if (!e?.response && e.config) {
		const {
						code,
						config: { url, method },
					} = e;

		const text = `Request ${method} ${url} failed with code - ${code} and body [No response was received]`;

		errors = [...errors, getMessage(text)];
	}

	if (e?.response && e.config) {
		const {
						config: { url, method },
						response: { status, data },
					} = e;

		const body = typeof data === 'string' ? data : JSON.stringify(data);
		const text = `Request ${method} ${url} failed with code ${status} and body [${body}]`;
		errors = [...errors, getMessage(text)];
	}

	if (e?.response?.data?.message) {
		errors = [...errors, getMessage(e?.response?.data?.message)];
	}

	if (e?.response?.data?.messages) {
		errors = [...errors, ...(e?.response?.data?.messages as Array<Message>)];
	}

	return errors;
}

export function getMessageFromException(e?: any): Array<Message> {
	// ignore http errors
	if (e?.isAxiosError) {
		return [];
	}

	return e?.messages
		? e.messages
		: [
			{
				level: MessageLevel.error,
				type: MessageType.Undefined,
				text: `Caught unhandled exception: ${e.stack}`,
			},
		];
}

export function getMessagesFromException(
	e: any,
	messages: Message[] = [],
): Array<Message> {
	return [
		...messages,
		...getMessageFromHttpResponse(e),
		...getMessageFromException(e),
	];
}
