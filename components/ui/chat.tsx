import * as React from "react"
import { cn } from "@/lib/utils"

const Chat = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col-reverse overflow-auto rounded-md border bg-background p-4",
      className
    )}
    {...props}
  />
))
Chat.displayName = "Chat"

const ChatMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isUser?: boolean
  }
>(({ className, isUser = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mb-4 flex w-max max-w-[80%] flex-col",
      isUser ? "ml-auto" : "mr-auto",
      className
    )}
    {...props}
  />
))
ChatMessage.displayName = "ChatMessage"

const ChatMessageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isUser?: boolean
  }
>(({ className, isUser = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg px-4 py-2",
      isUser
        ? "bg-primary text-primary-foreground"
        : "bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
))
ChatMessageContent.displayName = "ChatMessageContent"

const ChatMessageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-1 text-sm text-muted-foreground", className)}
    {...props}
  />
))
ChatMessageHeader.displayName = "ChatMessageHeader"

const ChatMessageFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-1 text-xs text-muted-foreground", className)}
    {...props}
  />
))
ChatMessageFooter.displayName = "ChatMessageFooter"

const ChatInput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex w-full items-center border-t bg-background p-4",
      className
    )}
    {...props}
  />
))
ChatInput.displayName = "ChatInput"

export {
  Chat,
  ChatMessage,
  ChatMessageContent,
  ChatMessageHeader,
  ChatMessageFooter,
  ChatInput,
}