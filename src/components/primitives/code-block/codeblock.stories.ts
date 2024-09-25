import type { Meta, StoryObj } from '@storybook/vue3'
import CodeBlock from '@/components/primitives/code-block/CodeBlock.vue'

const meta = {
  title: 'Primitives/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    code: `package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}`,
    lang: 'go',
  },
}
