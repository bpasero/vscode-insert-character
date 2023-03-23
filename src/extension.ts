import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('insert-character.pipe', () => {
		const activeTextEditor = vscode.window.activeTextEditor;
		if (!activeTextEditor) {
			return;
		}

		// insert a character to the active editor
		activeTextEditor.edit(editBuilder => {
			editBuilder.insert(activeTextEditor.selection.active, '|');
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('insert-character.angelbrackets', () => {
		const activeTextEditor = vscode.window.activeTextEditor;
		if (!activeTextEditor) {
			return;
		}

		// insert a character to the active editor
		activeTextEditor.edit(editBuilder => {
			editBuilder.insert(activeTextEditor.selection.active, '<>');
		});
	}));
}

export function deactivate() { }
