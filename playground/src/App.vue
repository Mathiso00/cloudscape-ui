<script setup lang="ts">
import { Avatar, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@koopsoperator/csui'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar alt="John Doe" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-2OOpx">
      <DropdownMenuGroup>
        <DropdownMenuItem
          icon="i-ph:user"
          text="Profile"
          :shortcut="['command', 'P']"
        />
        <DropdownMenuItem
          icon="i-ph:credit-card"
          text="Billing"
        />
        <DropdownMenuItem
          icon="i-ph:gear"
          text="Settings"
        />
        <DropdownMenuItem
          icon="i-ph:keyboard"
          text="Keyboard shortcuts"
        />
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem
          icon="i-ph:users"
          text="Team"
        />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger
            icon="i-ph:user-plus"
            text="Invite users"
          />
          <DropdownMenuSubContent>
            <DropdownMenuItem
              icon="i-ph:envelope"
              text="Email"
            />
            <DropdownMenuItem
              icon="i-ph:chat"
              text="Message"
            />
            <DropdownMenuSeparator />
            <DropdownMenuItem
              icon="i-ph:plus-circle"
              text="More..."
            />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem
          icon="i-ph:plus"
          :shortcut="['option', 'command', 'T']"
          text="New Team"
        />
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        icon="i-ph:sign-out"
        text="Log out"
      />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
