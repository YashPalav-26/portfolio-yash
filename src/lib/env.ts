interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

class EnvError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EnvError';
  }
}

export function getEmailJSConfig(): EmailJSConfig {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const missing: string[] = [];
  if (!serviceId) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!templateId) missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');

  if (missing.length > 0) {
    throw new EnvError(
      `Missing required environment variables: ${missing.join(', ')}. ` +
      'Please add them to your .env file.'
    );
  }

  return {
    serviceId,
    templateId,
    publicKey,
  };
}

export function isEmailJSConfigured(): boolean {
  try {
    getEmailJSConfig();
    return true;
  } catch {
    return false;
  }
}
