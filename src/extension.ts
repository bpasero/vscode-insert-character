import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('insert-character.pipe', () => insertCharacter('|')));
	context.subscriptions.push(vscode.commands.registerCommand('insert-character.anglebrackets', () => insertCharacter('<>')));
	context.subscriptions.push(vscode.commands.registerCommand('insert-character.greater', () => insertCharacter('>')));
	context.subscriptions.push(vscode.commands.registerCommand('insert-character.smaller', () => insertCharacter('<')));
	context.subscriptions.push(vscode.commands.registerCommand('insert-character.singleQuote', () => insertCharacter(`'`)));
}

function insertCharacter(character: string): void {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) {
		return;
	}

	// insert a character to the active editor
	activeTextEditor.edit(editBuilder => {
		editBuilder.insert(activeTextEditor.selection.active, character);
	});
}

export function deactivate() { }
