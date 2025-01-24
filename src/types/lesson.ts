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

export interface emptyLesson {
  empty: boolean;
}

export interface ParsedLesson {
  nr: number;
  subject: string;
  teacher: string;
  teacherId: number;
  room: string;
  groupName?: string;
}
