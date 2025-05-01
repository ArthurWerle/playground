const LOGS = [
  "[2025-02-19T12:00:00Z] 200 120ms /users",
  "[2025-02-19T12:00:01Z] 404 30ms /users",
  "[2025-02-19T12:00:02Z] 500 300ms /products",
  "[2025-02-19T12:00:03Z] 200 50ms /users",
  "[2025-02-19T12:00:04Z] 200 20ms /products",
  "[2025-02-19T12:00:05Z] 503 500ms /products"
];

const INDEXES = {
  "timestamp": 0,
  "statusCode": 1,
  "responseTime": 2,
  "endpoint": 3 
}

function getLogProperty(log: string, property: keyof typeof INDEXES) {
  const parts = log.split(/\s+/)

  return parts[INDEXES[property]]
}

type LogSummary = {
  totalRequests: number
  averageResponseTime: number
  errorRate: number
}

type LogData = {
  errors: number
  requests: number
  totalResponseTime: number
}

function getAverageResponseTime(logData: LogData) {
  return Number((logData.totalResponseTime/logData.requests).toFixed(2))
}

function getErrorRate(logData: LogData) {
  return Number(((logData.errors/logData.requests)*100).toFixed(2))
}



/** 
 * 
 * Expected output:
 * 
{
  "/users": {
    totalRequests: 3,
    averageResponseTime: 67,
    errorRate: 33.33
  },
  "/products": {
    totalRequests: 3,
    averageResponseTime: 273,
    errorRate: 66.67
  }
}
*/

function summarizeLogs(logs: string[]) {
  const logData = new Map<string, LogData>()

  return logs.reduce((acc, curr) => {
    const endpoint = getLogProperty(curr, "endpoint")
    const responseTime = getLogProperty(curr, "responseTime")
    const responseTimeNumber = Number(responseTime.replace("ms", ""))
    const statusCode = getLogProperty(curr, "statusCode")
    const hasError = statusCode.startsWith("4") || statusCode.startsWith("5")

    const existing = logData.get(endpoint)

    if (!existing) {
      logData.set(endpoint, {
        errors: hasError ? 1 : 0,
        requests: 1,
        totalResponseTime: responseTimeNumber
      })
    } else {
      logData.set(endpoint, {
        errors: existing.errors + (hasError ? 1 : 0),
        requests: existing.requests + 1,
        totalResponseTime: existing.totalResponseTime + responseTimeNumber
      })
    }

    const averageResponseTime = getAverageResponseTime(logData.get(endpoint)!)
    const errorRate = getErrorRate(logData.get(endpoint)!)

    return acc = {
      ...acc,
      [endpoint]: {
        totalRequests: (acc[endpoint]?.totalRequests || 0) + 1,
        averageResponseTime,
        errorRate,
      }
    }
  }, {})
}

console.log(summarizeLogs(LOGS))

