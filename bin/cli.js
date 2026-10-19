#!/usr/bin/env node
import { executeCommand } from '../lib/core.js';

const args = process.argv.slice(2);
executeCommand(args);