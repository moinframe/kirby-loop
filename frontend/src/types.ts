// TypeScript interfaces for loop

export interface LoopProps {
  position: 'top' | 'bottom';
  language?: string;
  apibase?: string;
  pageId: string;
  authenticated?: 'true' | 'false';
  'welcome-enabled'?: 'true' | 'false';
  'welcome-headline'?: string;
  'welcome-text'?: string;
  translations?: string;
}

export interface Comment {
  id: number;
  author: string;
  url: string;
  page: string;
  comment: string;
  selector: string;
  selectorOffsetX: number;
  selectorOffsetY: number;
  pagePositionX: number;
  pagePositionY: number;
  status: string;
  timestamp: number;
  lang: string;
  replies: Reply[];
}

export interface Reply {
  id?: number;
  author: string;
  comment: string;
  parentId: number | null;
  timestamp: number;
}

export interface CommentPayload {
  url: string;
  comment: string;
  selector: string;
  selectorOffsetX: number;
  selectorOffsetY: number;
  pagePositionX: number;
  pagePositionY: number;
  parentId: number | null;
  lang: string;
  pageId: string;
}

export interface ReplyPayload {
  comment: string;
  parentId: number | null;
}

export interface MarkerPosition {
  selector: string;
  selectorOffsetX: number;
  selectorOffsetY: number;
  pagePositionX: number;
  pagePositionY: number;
}

export interface ApiResponse<T = unknown> {
  status: 'ok' | 'error';
  message?: string;
  code?: string;
  data?: T;
}

export interface CommentsResponse extends ApiResponse {
  comments: Comment[];
}

export interface CommentResponse extends ApiResponse {
  comment: Comment;
}

export interface ReplyResponse extends ApiResponse {
  reply: Reply;
}

// Store interfaces
export interface FormData {
  text: string;
  parentId: number | null;
}

export interface UIState {
  open: boolean;
  sidebarOpen: boolean;
}

export interface APIStore {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}
