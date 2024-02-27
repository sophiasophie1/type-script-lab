if (ts.sys.setBlocking) {
    ts.sys.setBlocking();
}


export const setupTypeAcquisition = (config: ATABootstrapConfig) => {
  const moduleMap = new Map<string, ModuleMeta>()
  const fsMap = new Map<string, string>()

   if (allDTSFiles.length && depth === 0) {
      config.delegate.started?.()
    }


        if (typeof pkgJSON == "string") {
        fsMap.set(path, pkgJSON)
        config.delegate.receivedFile?.(pkgJSON, path)
      } else {
        config.logger?.error(`Could not download package.json for ${tree.moduleName}`)
      }
    }
