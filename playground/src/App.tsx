import {
  AlertDialog,
} from '@koopsoperator/csui'

function App() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Supprimer votre compte ?</AlertDialog.Title>
          <AlertDialog.Description>
            Cette action est irréversible, êtes-vous sûr de vouloir supprimer votre compte ?
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
          <AlertDialog.Action>Supprimer</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>

  )
}

export default App
