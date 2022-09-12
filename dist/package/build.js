"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild_1 = __importDefault(require("esbuild"));
const fs_1 = require("fs");
const path_1 = __importStar(require("path"));
const fs_2 = __importDefault(require("fs"));
const dist = (0, path_1.join)(process.cwd(), 'dist');
if (!(0, fs_1.existsSync)(dist)) {
    (0, fs_1.mkdirSync)(dist);
}
let files = [];
const getFilesRecursively = (directory) => {
    const filesInDirectory = fs_2.default.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path_1.default.join(directory, file);
        if (fs_2.default.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        }
        else {
            files.push(absolute);
        }
    }
};
getFilesRecursively('./src');
// esm output bundles with code splitting
esbuild_1.default
    .build({
    entryPoints: files,
    outdir: 'dist/layer/nodejs/node_modules',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node16'],
})
    .catch(() => process.exit(1));
// an entry file for cjs at the root of the bundle
(0, fs_1.writeFileSync)((0, path_1.join)(dist, 'index.js'), "export * from './esm/index.js';");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9idWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDJCQUEwRDtBQUMxRCw2Q0FBa0M7QUFDbEMsNENBQW9CO0FBRXBCLE1BQU0sSUFBSSxHQUFHLElBQUEsV0FBSSxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUV6QyxJQUFJLENBQUMsSUFBQSxlQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUU7SUFDckIsSUFBQSxjQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7Q0FDakI7QUFFRCxJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7QUFFekIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLGdCQUFnQixHQUFHLFlBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRTtRQUNuQyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFlBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEI7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLHlDQUF5QztBQUN6QyxpQkFBTztLQUNKLEtBQUssQ0FBQztJQUNMLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLE1BQU0sRUFBRSxnQ0FBZ0M7SUFDeEMsTUFBTSxFQUFFLElBQUk7SUFDWixTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO0NBQ25CLENBQUM7S0FDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWhDLGtEQUFrRDtBQUNsRCxJQUFBLGtCQUFhLEVBQUMsSUFBQSxXQUFJLEVBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLGlDQUFpQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXNidWlsZCBmcm9tICdlc2J1aWxkJztcbmltcG9ydCB7IGV4aXN0c1N5bmMsIG1rZGlyU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoLCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGRpc3QgPSBqb2luKHByb2Nlc3MuY3dkKCksICdkaXN0Jyk7XG5cbmlmICghZXhpc3RzU3luYyhkaXN0KSkge1xuICBta2RpclN5bmMoZGlzdCk7XG59XG5cbmxldCBmaWxlczogc3RyaW5nW10gPSBbXTtcblxuY29uc3QgZ2V0RmlsZXNSZWN1cnNpdmVseSA9IChkaXJlY3Rvcnk6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWxlc0luRGlyZWN0b3J5ID0gZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5KTtcbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzSW5EaXJlY3RvcnkpIHtcbiAgICBjb25zdCBhYnNvbHV0ZSA9IHBhdGguam9pbihkaXJlY3RvcnksIGZpbGUpO1xuICAgIGlmIChmcy5zdGF0U3luYyhhYnNvbHV0ZSkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgZ2V0RmlsZXNSZWN1cnNpdmVseShhYnNvbHV0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVzLnB1c2goYWJzb2x1dGUpO1xuICAgIH1cbiAgfVxufTtcblxuZ2V0RmlsZXNSZWN1cnNpdmVseSgnLi9zcmMnKTtcblxuLy8gZXNtIG91dHB1dCBidW5kbGVzIHdpdGggY29kZSBzcGxpdHRpbmdcbmVzYnVpbGRcbiAgLmJ1aWxkKHtcbiAgICBlbnRyeVBvaW50czogZmlsZXMsXG4gICAgb3V0ZGlyOiAnZGlzdC9sYXllci9ub2RlanMvbm9kZV9tb2R1bGVzJyxcbiAgICBidW5kbGU6IHRydWUsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICBwbGF0Zm9ybTogJ25vZGUnLFxuICAgIHRhcmdldDogWydub2RlMTYnXSxcbiAgfSlcbiAgLmNhdGNoKCgpID0+IHByb2Nlc3MuZXhpdCgxKSk7XG5cbi8vIGFuIGVudHJ5IGZpbGUgZm9yIGNqcyBhdCB0aGUgcm9vdCBvZiB0aGUgYnVuZGxlXG53cml0ZUZpbGVTeW5jKGpvaW4oZGlzdCwgJ2luZGV4LmpzJyksIFwiZXhwb3J0ICogZnJvbSAnLi9lc20vaW5kZXguanMnO1wiKTtcbiJdfQ==