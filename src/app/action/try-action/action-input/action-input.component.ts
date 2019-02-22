import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { inputTypes } from '../../../../_model/request-details/input-types';
import { MpInput } from 'src/_model/mpInput';

@Component({
  selector: 'app-action-input',
  templateUrl: './action-input.component.html',
  styleUrls: ['./action-input.component.css']
})
export class ActionInputComponent implements OnInit {

  @Input() mode: string;
  @Output() inputError = new EventEmitter<string>()
  input: string;
  displayError = false;


  constructor() { }

  ngOnInit() {
    this.input = '';
  }

  getInput() {
    if (!this.input) {
      this.emitError('You must enter some input!');
    }
    switch(this.mode) {
      case inputTypes.TEXT:
        return this.input;
      case inputTypes.JSON:
        return this.toJson();
    }
  }

  setInput(input) {
    switch(this.mode) {
      case inputTypes.TEXT:
        this.input = input;
        break;
      case inputTypes.JSON:
        let inputText = JSON.stringify(input, null, 4);
        this.input = inputText;
        break;
    }
    this.unsetError();
  }

  toJson() {
    try {
      return JSON.parse(this.input);
    } catch (error) {
      this.emitError('Your input must be valid JSON syntax. You can click the help icon for sample input.');
    }
  }

  emitError(error: string) {
    this.displayError = true;
    this.inputError.emit(error);
    throw new Error(error);
  }

  unsetError() {
    if (this.displayError) {
      this.displayError = false;
      this.inputError.emit('');
    }
  }

  onKeyDown(keyEvent: KeyboardEvent) {
    this.unsetError();
    const TAB_KEY = 9;
    if (keyEvent.keyCode === TAB_KEY) {
      this.handleTabKeyPress(keyEvent);
    }
  }

  handleTabKeyPress(keyEvent: KeyboardEvent) {
    const SPACE = ' ';
    if (!keyEvent.shiftKey) {
      for (let i = 0; i < 4; i++) {
        this.insertChar(keyEvent.target, SPACE);
      }
    }
    keyEvent.preventDefault();
  }

  // inserts a character into the textarea at the cursor position
  insertChar(textarea, char) {
    const text = char;
    if (textarea.selection) {
      // IE
      textarea.focus();
      var sel = textarea.selection.createRange();
      sel.text = text;
    } else if (textarea.selectionStart || textarea.selectionStart === 0) {
      // Others
      var startPos = textarea.selectionStart;
      var endPos = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, startPos) +
        text +
        textarea.value.substring(endPos, textarea.value.length);
        textarea.selectionStart = startPos + text.length;
        textarea.selectionEnd = startPos + text.length;
    } else {
      textarea.value += text;
    }
  }
  
}
