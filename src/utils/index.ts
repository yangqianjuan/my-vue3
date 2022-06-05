import dayJs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayJs.extend(utc)
export const formartUtcDate = (
  utcstring: string,
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  console.log(dayJs.utc(utcstring).utcOffset(8).format(format))
  return dayJs.utc(utcstring).utcOffset(8).format(format)
}
