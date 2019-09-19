---
lang: en
title: 'Importing models from LoopBack 3 projects'
keywords: LoopBack 4.0, Migration
sidebar: lb4_sidebar
permalink: /doc/en/lb4/Importing-LB3-models.html
---

## Synopsis

To simplify migration from LoopBack 3, LoopBack 4 provides a CLI tool to import
LoopBack 3 models into your LoopBack 4 project.

## Overview

A single model can be imported by running `lb4 import-model` command.

### Arguments

`lb3app`: Path to the directory containing your LoopBack 3.x application.

**IMPORTANT** The generator loads the application via `require()`, it does not
support applications that are unable to boot (throw errors).

### Options

`outDir`: Directory where to write the generated source file. Default:
`src/models`
