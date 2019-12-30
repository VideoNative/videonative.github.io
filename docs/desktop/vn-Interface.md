---
id: vn-interface
title: VNDesktop 接口文档
---

### LoadVideoNativeDll.h

void VN_InitViewsContentClient(int argc, const char** argv, void (*pMain)(), void *app_delegate);   

void VN_InitHybridViewsContentClient(int argc, const char** argv, void (*pMain)());   

bool VN_GetQVNVideoNative(IQVNVideoNative **pQVNVideoNative);   

void VN_SetDefaultPictureCacheDirectory(LPCWSTR directory);   

void VN_InitPictureDataManager(LPCWSTR sqliteDBPath, LPCWSTR tableName);   

void VN_SetCookieFilePath(const char *cookieFilePath); // utf8 coding   

void VN_InitVNStorage(const char *sqliteDBPath, const char* storageTable); // utf8 coding   

bool VN_CreateDataBuffer(IDataBuffer** ppBuffer);   

using ExternalDataCallback = void(*)(IDataBuffer**);   
void VN_SetExternalDataFetcher(const char* key, ExternalDataCallback callback); // utf8 coding   

BOOL VN_GetExternalManager(IVNExternalManager** pExternalManager);   

---

### IQVNVideoNative.h

---

### IQVNApp.h

---

### IQVNPage.h

---
