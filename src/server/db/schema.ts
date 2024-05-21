import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  registerNum: integer('register_num').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: text('email'),
  designation: text('designation'),
});

export const workdiaries = sqliteTable('workdiaries', {
  entryID: integer('entry_id').primaryKey({autoIncrement: true}),
  serialNum: integer('serial_num'),
  workTitle: text('work_title'),
  workDesc: text('work_description'),
  startTime: text('start_time'),
  endTime: text('end_time'),
  hoursWorked: text('hours_worked'),
  registerNum: integer('register_num').references(() => users.registerNum),
})

export const sessionBooking = sqliteTable('session_booking', {
  sessionID: integer('session_id').primaryKey({autoIncrement: true}),
  applicantRegID: integer('applicant_regID'),
  applicantName: text('applicant_name'),
  applicantDesig: text('applicant_designation'),
  applicantEmail: text('applicant_email'),
  applicantPhone: text('applicant_phone'),
  sessionDate: text('session_date'),
  sessionType: text('session_type').default("GPT"),
  sessionTopic: text('session_topic'),
})
