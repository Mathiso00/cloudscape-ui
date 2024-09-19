<script setup lang="ts">
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from '@koopsoperator/csui'
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger>
      open me
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogAction>
        cc
      </AlertDialogAction>
      <AlertDialogCancel>
        dd
      </AlertDialogCancel>
    </AlertDialogContent>
  </AlertDialog>
</template>
