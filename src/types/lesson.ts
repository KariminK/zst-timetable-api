export interface Lesson {
  subject: string;
  room?: string;
  roomId?: string;
  groupName?: string;
  teacher?: string;
  teacherId?: string;
  className?: string;
  classId?: string;
}

export interface ParsedLesson {
  subject: string;
  teacher: string;
  teacherId: number;
  room: string;
  groupName?: string;
}
