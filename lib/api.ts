export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const resendApiUrl = "https://api.resend.com/emails";
export const rateLimitWindowMs = 10 * 60 * 1000;
export const rateLimitMaxRequests = 5;

export function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function cleanArray(value: unknown) {
  return Array.isArray(value)
    ? value.map((item) => clean(item)).filter(Boolean)
    : [];
}

export function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export function createRateLimiter(maxRequests = rateLimitMaxRequests, windowMs = rateLimitWindowMs) {
  const requestLog = new Map<string, number[]>();

  return (identifier: string) => {
    const now = Date.now();
    const recentRequests = (requestLog.get(identifier) ?? []).filter(
      (timestamp) => now - timestamp < windowMs
    );

    if (recentRequests.length >= maxRequests) {
      requestLog.set(identifier, recentRequests);
      return true;
    }

    recentRequests.push(now);
    requestLog.set(identifier, recentRequests);
    return false;
  };
}
