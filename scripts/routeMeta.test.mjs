import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { routes, metaForPath, jsonLdFor } from '../src/routeMeta.js'

test('paths, titles and descriptions are unique', () => {
  for (const key of ['path', 'title', 'description', 'tool']) {
    const values = routes.map((r) => r[key])
    assert.equal(new Set(values).size, values.length, `duplicate ${key}`)
  }
})

test('paths are slash-free and every route has an h1', () => {
  for (const r of routes) {
    assert.ok(r.path === '/' || /^\/[a-z0-9-]+$/.test(r.path), r.path)
    assert.ok(r.h1 && r.title.length <= 70 && r.description.length <= 160, r.path)
  }
})

test('every route maps to a tool rendered by App', () => {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf-8')
  for (const r of routes) assert.match(app, new RegExp(`\\b${r.tool}:`), r.tool)
})

test('metaForPath and jsonLdFor', () => {
  assert.equal(metaForPath('/emoji-kitchen').tool, 'kitchen')
  assert.equal(metaForPath('/nope'), undefined)
  assert.equal(jsonLdFor(routes[0])['@type'], 'WebApplication')
  assert.equal(jsonLdFor(routes[1])['@type'], 'WebPage')
})
